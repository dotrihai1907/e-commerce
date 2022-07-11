import React from "react";
import { Table, Rate } from "antd";
import "antd/dist/antd.css";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import style_less from "./TableUSer.module.less";
import style_css from "./TableUser.module.css";
import styles_scss from "./TableUser.module.scss";

import Search from "../Search/Search";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { selectAccessToken } from "../../redux/auth/selector";
import { selectQueryUsers, selectAmountUsers } from "../../redux/user/selector";

import {
  getQueryUsers,
  getAmountUsers,
  deleteUserById,
  getIdUserUpdate,
} from "../../redux/user/action";

export default function TableUser() {
  const queryUsers = useSelector(selectQueryUsers)?.result ?? [];
  const amountUsers = useSelector(selectAmountUsers);
  const accessToken = useSelector(selectAccessToken);

  const [size, setSize] = useState(5);
  const [page, setPage] = useState(1);
  const [isHidden, setIsHidden] = useState(false);
  const [idDelete, setIdDelete] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //----------delete----------------------
  const handleConfirmDelete = (idUserDelete) => {
    setIdDelete(idUserDelete);
    setIsHidden(true);
  };

  const handleDelete = () => {
    setIsHidden(false);
    dispatch(deleteUserById(accessToken, idDelete));
    dispatch(getQueryUsers(accessToken, size, page));
  };

  const handleCancel = () => {
    setIdDelete(null);
    setIsHidden(false);
  };

  function ConfirmDelete() {
    return (
      <div className={styles_scss.delete}>
        <div className={styles_scss.title}>Confirm Delete</div>
        <hr className={styles_scss.firstDivider} />
        <div className={styles_scss.content}>
          Are you sure to delete user #{idDelete}?
        </div>
        <hr className={styles_scss.secondDivider} />
        <button onClick={handleCancel} className={styles_scss.cancelButton}>
          Cancel
        </button>
        <button onClick={handleDelete} className={styles_scss.deleteButton}>
          Delete
        </button>
      </div>
    );
  }

  //----------update---------------------
  const handleUpdate = (idUpdate) => {
    dispatch(getIdUserUpdate(idUpdate));
    navigate("/admin/user-edit");
  };

  //--------------------------------------

  useEffect(() => {
    dispatch(getAmountUsers(accessToken));
  }, []);

  useEffect(() => {
    dispatch(getQueryUsers(accessToken, size, page));
  }, [size, page]);

  const data = queryUsers.map((user, index) => ({
    key: user.id,
    id: index + 1,
    user: {
      image: user.avatar ?? '"https://joeschmoe.io/api/v1/random"',
      text: {
        name: user.username,
        role: user.role,
        email: user.email,
        idUser: user.id,
      },
    },
    contact: user.contact ?? "09480577xx",
    status: user.isActive,
    verifyEmail: user.isEmailVerified,
    verifyContact: user.isContactVerified,
  }));

  const columns = [
    {
      title: () => <div className={style_css.title}>ID</div>,
      dataIndex: "id",
      sorter: (a, b) => a.id - b.id,
      render: (id) => {
        return <p className={style_css.id}>{id}</p>;
      },
    },
    {
      title: () => <div className={style_css.title}>User</div>,
      dataIndex: "user",
      sorter: (a, b) => a.user.text.name.length - b.user.text.name.length,
      sortDirections: ["descend", "ascend"],
      render: (user) => (
        <div className="flex">
          <img src={user.image} className={style_css.image} />
          <div className="flex flex-col justify-around w-[200px]">
            <div className="flex justify-between">
              <div className={style_css.name}>{user.text.name}</div>
              <div>
                {user.text.role === "admin" ? (
                  <div className={style_css.roleAdmin}>Admin</div>
                ) : (
                  <div className={style_css.roleUser}>Customer</div>
                )}
              </div>
            </div>
            <div className={style_css.email}>{user.text.email}</div>
          </div>
        </div>
      ),
    },
    {
      title: () => <div className={style_css.title}>Contact</div>,
      dataIndex: "contact",
      sorter: (a, b) => a.contact - b.contact,
      render: (contact) => <div className={style_css.contact}>{contact}</div>,
    },
    {
      title: () => <div className={style_css.title}>Status</div>,
      dataIndex: "status",
      sorter: (a, b) => a.status.length - b.status.length,
      sortDirections: ["descend", "ascend"],
      render: (status) => (
        <div className={style_css.status}>{status ? "Active" : "Disabled"}</div>
      ),
    },
    {
      title: () => <div className={style_css.title}>Verify Email</div>,
      dataIndex: "verifyEmail",
      sorter: (a, b) => a.verifyEmail.length - b.verifyEmail.length,
      sortDirections: ["descend", "ascend"],
      render: (verifyEmail) => (
        <div className={style_css.verifyEmail}>
          {verifyEmail ? "Yes" : "No"}
        </div>
      ),
    },
    {
      title: () => <div className={style_css.title}>Verify Contact</div>,
      dataIndex: "verifyContact",
      sorter: (a, b) => a.verifyContact.length - b.verifyContact.length,
      sortDirections: ["descend", "ascend"],
      render: (verifyContact) => (
        <div className={style_css.verifyContact}>
          {verifyContact ? "Yes" : "No"}
        </div>
      ),
    },
    {
      dataIndex: "user",
      render: (user) => (
        <div className="flex">
          <button onClick={() => handleUpdate(user.text.idUser)}>
            <FiEdit
              style={{
                color: "#387B18",
                width: 24,
                height: 24,
                marginRight: 12,
              }}
            />
          </button>
          <button onClick={() => handleConfirmDelete(user.text.idUser)}>
            <RiDeleteBinLine
              style={{
                color: "#F02020",
                width: 24,
                height: 24,
              }}
            />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {isHidden && ConfirmDelete()}
      <Search placeholder={"Search Product"} />
      <Table
        style={{ width: "100%", backgroundColor: "#fff", height: "100%" }}
        columns={columns}
        dataSource={data}
        className={style_less.style_table}
        pagination={{
          pageSize: Number(size),
          total: Number(amountUsers),
          onChange: (e) => setPage(e),
        }}
      />
      <div className="absolute bottom-[20px] right-[31px]">
        <span className={style_css.itemPerPage}>Items per page</span>
        <input
          type="number"
          value={size}
          max={7}
          onChange={(e) => setSize(e.target.value)}
          className={style_css.numberItem}
        />
      </div>
    </div>
  );
}
