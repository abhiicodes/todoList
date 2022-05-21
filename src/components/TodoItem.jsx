import React from "react";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector } from "react-redux";

export default function TodoItem({
  handleDelete,
  toggleUpdate,
  handleStatus,
  handleUpdate,
  filt,
}) {
  const [upd, setUp] = useState({});
  const todo = useSelector((store) => store.todo);
  return (
    <div>
      {todo
        .filter((el) => el["name"].includes(filt))
        .map((e) => {
          return (
            <div key={e.id}>
              {/* {e.update ? (
              <input
                id={e.id}
                value={upd[e.id]}
                onChange={(e) => {
                  setUp({
                    ...upd,
                    [e.target.id]: e.target.value,
                  });
                }}
              ></input>
            ) : (
              <h1>{e.name}</h1>
            )}
            <h5>{e.status ? "Done" : "Not Done"}</h5>
            <button
              onClick={() => {
                handleStatus(e.id);
              }}
            >
              Toggle
            </button>
            <button
              onClick={() => {
                handleDelete(e.id);
              }}
            >
              <DeleteIcon />
            </button>
            <button
              onClick={() => {
                if (e.update == false) {
                  setUp({
                    ...upd,
                    [e.id]: e.name,
                  });
                }
                handleUpdate(e.id, e.update, upd[e.id]);
              }}
            >
              {e.update ? <CheckIcon /> : <EditIcon />}
            </button> */}

              {/* <h1>
              {e.name}-{e.status ? "Done" : "Not Done"}
            </h1> */}

              {e.update ? (
                <input
                  id={e.id}
                  value={upd[e.id]}
                  onChange={(e) => {
                    setUp({
                      ...upd,
                      [e.target.id]: e.target.value,
                    });
                  }}
                ></input>
              ) : (
                <h1>{e.name}</h1>
              )}
              <h3>{e.status ? "DONE" : "NOT DONE"}</h3>
              <button
                onClick={() => {
                  handleDelete(e.id);
                }}
              >
                Delete
              </button>
              <button
                onClick={() => {
                  handleStatus(e.id);
                }}
              >
                Toggle
              </button>

              {e.update ? (
                <button
                  onClick={() => {
                    toggleUpdate(e.id);

                    handleUpdate({
                      id: e.id,
                      text: upd[e.id],
                    });
                  }}
                >
                  confirm
                </button>
              ) : (
                <button
                  onClick={() => {
                    setUp({
                      ...upd,
                      [e.id]: e.name,
                    });
                    toggleUpdate(e.id);
                  }}
                >
                  Edit
                </button>
              )}
            </div>
          );
        })}
    </div>
  );
}
