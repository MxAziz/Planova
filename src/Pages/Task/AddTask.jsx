import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const AddTask = () => {
  const [selectedValue, setSelectedValue] = useState();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = {
      title: form.title.value,
        category: form.category.value,
        description: form.description.value,
      date: Date.now(),
      };
      console.log(formData);

    axiosPublic
      .post("/tasks", formData)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          toast.success("Task Added successfully!");
          navigate("/home");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="pt-8 pb-8 bg-[#F4F7FD] dark:bg-[#20212C]">
      <div className="card bg-base-100 dark:bg-gray-900 dark:text-white mx-auto w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text dark:text-white">Title</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Task Title"
              className="input input-bordered dark:bg-gray-800"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text dark:text-white">Category </span>
            </label>
            <select
              id="tasks"
              name="category"
              value={selectedValue}
              onChange={(e) => setSelectedValue(e.target.value)}
              className="select select-bordered w-full max-w-sm dark:bg-gray-800"
            >
              <option disabled value="">
                Select a task type?
              </option>
              <option value="todo">Todo</option>
              <option value="in-progress">In-progress</option>
              <option value="done">Done</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text dark:text-white">Description</span>
            </label>
            <textarea
              name="description"
              className="textarea textarea-bordered dark:bg-gray-800"
              placeholder="Task Description"
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <button className=" py-3 rounded-md bg-[#635FC7] text-white hover:bg-[#312c83]">
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
