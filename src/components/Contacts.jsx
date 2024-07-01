import { Form } from "react-router-dom";

export default function Contacts() {
  const contact = {
    first: "Your",
    last: "Name",
    avatar: "https://robohash.org/you.png?size=200x200",
    twitter: "your_handle",
    notes: "Some notes",
    favorite: true,
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="flex items-center justify-center p-8">
        <img
          src={contact.avatar}
          alt={`${contact.first} ${contact.last}`}
          className="h-32 w-32 rounded-full"
        />
      </div>

      <div className="px-6 py-4">
        <div className="text-xl font-bold mb-2">
          {contact.first} {contact.last}
        </div>

        {contact.twitter && (
          <p className="text-gray-600">
            <a
              href={`https://twitter.com/${contact.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @{contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p className="text-gray-700 mt-2">{contact.notes}</p>}
      </div>

      <div className="px-6 py-4">
        <form action="edit">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-500"
          >
            Edit
          </button>
        </form>

         <form
          method="post"
          action="destroy"
          onSubmit={(event) => {
            if (!window.confirm("Please confirm you want to delete this record.")) {
              event.preventDefault();
            }
          }}
          className="ml-4"
        >
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-red-500"
          >
            Delete
          </button>
        </form> 
      </div>
    </div>
  );
}
