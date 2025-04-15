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

function OpenChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const selectedUser = users.find((user) => user.id === selectedUserId);

  return (
    <div className="fixed bottom-20 right-6 w-80 bg-white border rounded-lg shadow-xl z-50">
      {/* Chat Header (Accordion Toggle) */}
      <div
        className="flex justify-between items-center px-4 py-3 bg-blue-200 cursor-pointer rounded-t-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-lg font-semibold">Chat</h2>
        <span className="text-xl">{isOpen ? "−" : "+"}</span>
      </div>

      {/* Accordion Content */}
      {isOpen && (
        <div className="bg-white">
          {/* Online Users List */}
          <div className="flex overflow-x-auto gap-3 px-4 py-3 border-b">
            {users.map((user) => (
              <div
                key={user.id}
                onClick={() => setSelectedUserId(user.id)}
                className={`flex flex-col items-center cursor-pointer hover:scale-105 transition ${
                  selectedUserId === user.id ? "ring-2 ring-blue-400 rounded-full p-1" : ""
                }`}
              >
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-10 h-10 rounded-full"
                />
                <span className="text-xs mt-1">{user.name}</span>
              </div>
            ))}
          </div>

          {/* Chat Area */}
          {selectedUser && (
            <div className="flex flex-col h-60">
              {/* Chat Header */}
              <div className="px-4 py-2 bg-blue-100 border-b">
                <h3 className="font-semibold">Chat with {selectedUser.name}</h3>
              </div>

              {/* Messages */}
              <div className="flex-1 p-4 overflow-y-auto">
                {dummyMessages[selectedUserId].map((msg, idx) => (
                  <div
                    key={idx}
                    className={`mb-2 p-2 rounded-lg max-w-[70%] ${
                      idx % 2 === 0
                        ? "bg-blue-100 self-end ml-auto"
                        : "bg-gray-100"
                    }`}
                  >
                    {msg}
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="p-2 border-t">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="w-full border rounded px-3 py-2 text-sm focus:outline-none"
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default OpenChat;
