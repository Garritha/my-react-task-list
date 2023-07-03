import { Task } from '../Task';
import {
  Box,
  Text,
  Flex,
  Badge,
  useColorMode,
} from "@chakra-ui/react";

export function Tasks({ tasks, onDelete, onComplete, onEdit }) {
  const { colorMode } = useColorMode();
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter(task => task.isCompleted).length;

    function handleEdit(taskId, newTitle) {
    onEdit(taskId, newTitle);
  }
  return (
   <Box
      width="100%"
      maxWidth="736px"
      margin="0 auto"
      marginTop="90px"
      padding="0 1rem"
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        marginBottom="24px"
      >
        <Flex alignItems="center" gap="8px">
          <Text color="#4EA8DE" fontSize="14px" fontWeight="700">
            Created tasks
          </Text>
          <Badge
            background="#333333"
            color="#D9D9D9"
            padding="3px 9px"
            borderRadius="999px"
            fontSize="12px"
            fontWeight="700"
          >
            {tasksQuantity}
          </Badge>
        </Flex>

        <Flex alignItems="center" gap="8px">
          <Text
            color={colorMode === "light" ? "#2e3744" : "#164278"}
            fontSize="14px"
            fontWeight="700"
          >
            Completed tasks
          </Text>
          <Badge
            background="#333333"
            color="#D9D9D9"
            padding="3px 9px"
            borderRadius="999px"
            fontSize="12px"
            fontWeight="700"
          >
            {completedTasks} of {tasksQuantity}
          </Badge>
        </Flex>
      </Flex>

      <Flex flexDirection="column" gap="12px">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onComplete={onComplete}
            onEdit={handleEdit}
          />
        ))}
      </Flex>
    </Box>
  )
}