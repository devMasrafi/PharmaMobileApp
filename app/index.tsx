import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
type Todo = {
  id: string;
  value: string;
};

export default function Index() {
  // states
  const [getInput, setGetInput] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = () => {
    if (getInput.trim()) {
      setTodos([...todos, { id: Date.now().toString(), value: getInput }]);
      setGetInput(""); // Clear input field after adding
    }
  };

  // console.log(todos);
  return (
    <View className="bg-gray-300">
      {/* texts */}
      <Text className="text-3xl">Todo App</Text>

      {/* btn */}
      <TextInput
        className=""
        placeholder="add a todo"
        value={getInput}
        onChangeText={setGetInput}
      />

      <TouchableOpacity
        className="text-xl px-4 py-1 bg-gray-400"
        onPress={addTodo}
      >
        <Text>Add</Text>
      </TouchableOpacity>

      <View>
        <View>
          {todos.map((todo) => (
            <Text key={todo.id} className="bg-gray-200 p-3 rounded mt-2">
              {todo.value}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
}
