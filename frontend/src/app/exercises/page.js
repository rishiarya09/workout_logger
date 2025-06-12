"use client";
import { useEffect, useState } from "react";
import { catagories, exercises as initialExercises } from "../../../lib/data";
import {
  addCategory,
  addExercise,
  getAllExerciseCategories,
  getAllExercises,
} from "../../../lib/api";
import Toast from "@/ components/Toast";

export default function ExercisePage() {
  const [open, setOpen] = useState(false);
  const [exerciseList, setExerciseList] = useState([]);
  const [newExercise, setNewExercise] = useState({
    name: "",
    description: "",
    category: "",
    video_url: "",
  });
  const [newCateory, setNewCategory] = useState({});
  const [categoryList, setCategoryList] = useState([]);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    getAllExercises().then(setExerciseList).catch(console.error);
    getAllExerciseCategories().then(setCategoryList).catch(console.error);
  }, []);

  // Realted too New Category

  const handleNewCategory = () => {
    Object.keys(newCateory).length === 0
      ? setNewCategory({ name: "" })
      : setNewCategory({});
  };

  const handleAddNewCategory = async () => {
    // send it to api and once it is success
    // Show the success toast.
    if (!newCateory.name) {
      alert("Please fill out category name");
      return;
    }
    try {
      const addCat = await addCategory(newCateory);
      setCategoryList([...categoryList, addCat.data]);
      setToastMessage(addCat.message);
      setNewCategory({});
    } catch (err) {
      setToastMessage("Failed to Create new Category");
      console.error(err);
    }
  };

  // Related to the Adding New Exercise

  const handleAdd = async () => {
    if (!newExercise.name || !newExercise.category) {
      alert("Please fill out both the Name and Category");
      return;
    }

    try {
      const convertedExercise = {
        ...newExercise,
        video_url: convertToEmbedUrl(newExercise.video_url),
      };
      const addEx = await addExercise(convertedExercise);
      setToastMessage(addEx.message);
      setExerciseList([...exerciseList, addEx.data]);
      setNewExercise({
        name: "",
        description: "",
        category: "",
        video_url: "",
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleAccordian = () => {
    open === true ? setOpen(false) : setOpen(true);
  };

  function convertToEmbedUrl(url) {
    if (!url) return "";

    try {
      const urlObj = new URL(url);

      if (
        urlObj.hostname.includes("youtube.com") &&
        urlObj.searchParams.get("v")
      ) {
        // Handles: https://www.youtube.com/watch?v=VIDEO_ID
        const videoId = urlObj.searchParams.get("v");
        return `https://www.youtube.com/embed/${videoId}`;
      }

      if (urlObj.hostname.includes("youtu.be")) {
        // Handles: https://youtu.be/VIDEO_ID
        const videoId = urlObj.pathname.slice(1);
        return `https://www.youtube.com/embed/${videoId}`;
      }

      return url; // Return original URL if not a YouTube URL
    } catch (e) {
      return url;
    }
  }

  return (
    <div className="p-5">
      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage("")} />
      )}
      <div className="grid grid-cols-6 grid-gap p-3">
        <h2 className="text-xl font-bold mb-4 col-start-1 col-end-3">
          {" "}
          Manage Exercise
        </h2>

        <button
          onClick={handleAccordian}
          className={`col-span-2 col-end-7 ${
            !open ? "bg-blue-500 text-white" : "bg-gray-400 text-black"
          }   rounded-full`}
        >
          {!open ? "Create New Exercise" : "close"}
        </button>
      </div>
      <div className={`mb-4 space-y-2 ${!open ? "hidden" : ""}`}>
        <input
          className="border p-2 rounded w-full"
          placeholder="Exercise Name"
          value={newExercise.name}
          required
          onChange={(e) =>
            setNewExercise({ ...newExercise, name: e.target.value })
          }
        />
        <input
          className="border p-2 rounded w-full"
          placeholder="Add description or steps to perform"
          value={newExercise.description}
          onChange={(e) =>
            setNewExercise({ ...newExercise, description: e.target.value })
          }
        />
        <input
          className="border p-2 rounded w-full"
          placeholder="Add video url for reference"
          value={newExercise.video_url}
          onChange={(e) =>
            setNewExercise({ ...newExercise, video_url: e.target.value })
          }
        />
        <div className="flex flex-row">
          <div className="basis-7xl">
            <select
              className="border p-2 rounded w-full "
              value={newExercise.category}
              onChange={(e) =>
                setNewExercise({ ...newExercise, category: e.target.value })
              }
            >
              {" "}
              <option value="">Select Category</option>
              {categoryList &&
                categoryList.length > 0 &&
                categoryList.map((cat, i) => (
                  <option key={i} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
            </select>
          </div>
          <div className="basis-1 pl-2">
            <button
              onClick={handleNewCategory}
              className={`bg-blue-500 text-white px-4 py-2 rounded-full basis-1/3 ${
                Object.keys(newCateory).length === 0 ? "" : "hidden"
              }`}
            >
              +
            </button>
            <button
              onClick={handleNewCategory}
              className={`bg-red-500 text-white px-4 py-2 rounded-full basis-1/3 ${
                Object.keys(newCateory).length !== 0 ? "" : "hidden"
              }`}
            >
              x
            </button>
          </div>
        </div>
        <div
          className={`flex flex-row ${
            Object.keys(newCateory).length !== 0 ? "" : "hidden"
          }`}
        >
          <div className="basis-7xl">
            <input
              className="border p-2 rounded w-full"
              placeholder="Add video url for reference"
              value={newCateory.name || ""}
              onChange={(e) =>
                setNewCategory({ ...newCateory, name: e.target.value })
              }
            />
          </div>
          <div className="basis-7 pl-2">
            <button
              onClick={handleAddNewCategory}
              className={`bg-blue-500 text-white px-4 py-2 rounded-full basis-1/3 ${
                Object.keys(newCateory).length !== 0 ? "" : "hidden"
              }`}
            >
              Submit
            </button>
          </div>
        </div>
        <button
          onClick={handleAdd}
          className={`bg-blue-500 text-white px-4 py-2 rounded-full ${
            !open ? "hidden" : ""
          }`}
        >
          Add Exercise
        </button>
      </div>

      <div className="p-6 bg-gray-50 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">📝 Exercise List</h2>
        <div className="space-y-4">
          {exerciseList.map((exercise, index) => (
            <div key={index} className="p-4 bg-white rounded-md shadow border">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-blue-700">
                    {exercise.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    <b>Category:</b> {exercise.category.name}
                  </p>
                  {exercise.description && (
                    <p className="mt-1 text-gray-700 text-sm">
                      {exercise.description}
                    </p>
                  )}
                </div>

                {exercise.video_url && (
                  <div className="ml-4 w-24 h-16 flex-shrink-0 rounded overflow-hidden border">
                    <iframe
                      src={exercise.video_url.replace("watch?v=", "embed/")}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={`video-${index}`}
                    />
                  </div>
                )}
              </div>

              <div className="mt-4 flex justify-end space-x-2">
                <button
                  onClick={() => handleEdit(index)}
                  className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
