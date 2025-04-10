import React, { useState } from "react";

const users = [
  { id: 1, name: "Alice", avatar: "https://i.pravatar.cc/150?img=1" },
  { id: 2, name: "Bob", avatar: "https://i.pravatar.cc/150?img=2" },
  { id: 3, name: "Charlie", avatar: "https://i.pravatar.cc/150?img=3" },
  { id: 4, name: "Diana", avatar: "https://i.pravatar.cc/150?img=4" },
];

const dummyMessages = {
  1: ["Hi Alice!", "How are you doing today?"],
  2: ["Hey Bob!", "Got time to review the report?"],
  3: ["Yo Charlie!", "Ready for the meeting?"],
  4: ["Hello Diana!", "Lunch at 1?"],
};

function OpenChat({ onClose }) {
  const [selectedUserId, setSelectedUserId] = useState(users[0].id);
  const selectedUser = users.find((user) => user.id === selectedUserId);

  return (
    <div className="fixed bottom-20 right-6 w-110 h-140 bg-white border rounded-lg z-50 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
      <div className="flex justify-between items-center py-4 border-b rounded-t-lg px-6 bg-blue-200">
        <h2 className="text-lg font-semibold ml-30">Employees Chat</h2>
        <button
          onClick={onClose}
          className="bg-gray-600 text-white rounded-2xl text-xl cursor-pointer w-10 hover:text-red-500 hover:bg-gray-400 hover:rounded-2xl"
        >
          &times;
        </button>
      </div>
      <div className="p-4 overflow-y-auto h-[calc(100%-60px)] bg-white rounded-b-lg">
        {/* left nav for all members/admin */}

        <nav>
          <div className="fixed bottom-20 right-6 w-110 h-125 bg-white border rounded-lg z-50 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] overflow-hidden flex">
            {/* Left Sidebar */}
            <div className="w-[80px] bg-gray-100 border-r p-2 flex flex-col items-center gap-4 pt-6">
              {users.map((user) => (
                <div
                  key={user.id}
                  onClick={() => setSelectedUserId(user.id)}
                  className={`relative group cursor-pointer transition transform hover:scale-105 ${
                    selectedUserId === user.id
                      ? "ring-2 ring-blue-400 rounded-full"
                      : ""
                  }`}
                >
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <span className="absolute left-14 top-2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                    {user.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Chat Section */}
            <div className="flex-1 flex flex-col">
              {/* Header */}
              <div className="flex justify-between items-center py-4  px-6 bg-blue-100">
                <h2 className="text-lg font-semibold">
                  Chat with {selectedUser.name}
                </h2>
                {/* <button
                  onClick={onClose}
                  className="bg-gray-600 text-white rounded-2xl text-xl w-10 hover:text-red-500 hover:bg-gray-400"
                >
                  &times;
                </button> */}
              </div>

              {/* Messages */}
              <div className="p-4 flex-1 overflow-y-auto bg-white">
                {dummyMessages[selectedUserId].map((msg, idx) => (
                  <div
                    key={idx}
                    className={`mb-2 p-2 border border-[#e0e0e0] rounded-lg max-w-[70%] ${
                      idx % 2 === 0
                        ? "bg-[#39c0ed33] self-end ml-auto"
                        : "bg-[#fbfbfb]"
                    }`}
                  >
                    {msg}
                  </div>
                ))}
              </div>

              {/* Input (optional) */}
              <div className="p-4 border-t bg-white">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="w-full border rounded px-4 py-2 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </nav>

        <p className="text-gray-500 text-sm">
          Chat card goes here for each pair
        </p>
        {/* chat cards here */}
      </div>
    </div>
  );
}

export default OpenChat;
