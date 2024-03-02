import TextInput from "./ui/input";

export default function TodoInputContainer() {
  return (
    <>
      <div className=" grid  grid-cols-6 flex items-center justify-center h-1/4 w-2/4">
        <TextInput />
        <button
          className="bg-blue-500  rounded-lg focus:ring-blue-600 focus:border-blue-500 hover:bg-blue-600 block m-2.5 p-2.5 min-w-12"
          onClick={() => {}}
        >
          +
        </button>
      </div>
    </>
  );
}
