import ListGroup from "./components/ListGroup";
import "./app.css";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Like from "./components/Like";
import NavBar from "./components/NavBar";
import Cart from "./components/cart";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form";
import React, { useEffect, useRef, useState } from "react";
import ExpenseList from "./expence-tracker/components/ExpenseList";
import ExpenseFilter from "./expence-tracker/components/ExpenseFilter";
import ExpenseForm from "./expence-tracker/components/ExpenseForm";
import categories from "./expence-tracker/categories";
import ProductList from "./components/ProductList";
import axios from "axios";
import { CanceledError } from "./components/services/api-client";
import userService, { User } from "./components/services/user-service";
import useUsers from "./hooks/useUsers";

function App() {
  const { users, error, isLoading, setUsers, setError } = useUsers();

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    userService.delete(user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: "Mosh" };
    setUsers([newUser, ...users]);

    userService
      .create(newUser)
      .then((res) => setUsers([res.data, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    userService.update(updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
