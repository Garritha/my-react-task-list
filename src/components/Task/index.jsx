import { CheckCircleIcon } from "@chakra-ui/icons";
import { FiEdit } from "react-icons/fi";
import { TbTrash } from "react-icons/tb";
import {
  Box,
  Textarea,
  Button,
  useColorMode,
  Text, Icon
} from "@chakra-ui/react";
export function Task({ task,   onDelete, onComplete, onEdit }) {
   const { colorMode } = useColorMode();
  function handleEditClick() {
    const newTitle = prompt("Ingrese el nuevo título de la tarea:");
    if (newTitle !== null) {
      onEdit(task.id, newTitle);
    }
  }
  
  return (
<<<<<<< HEAD
     <Box
      width="100%"
      background={colorMode === "light" ? "white" : "#262626"}
      border="1px solid #333333"
      padding="16px"
      borderRadius="8px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      gap="12px"
    >
      <Button
        className="checkContainer"
        onClick={() => onComplete(task.id)}
        width="18px"
        height="18px"
        background="none"
        border="none"
      >
        {task.isCompleted ? (
          <CheckCircleIcon width="100%" height="100%" color="#5E60CE" />
        ) : (
          <Box
            width="100%"
            height="100%"
            borderRadius="999px"
            border="2px solid #4EA8DE"
          />
        )}
      </Button>

      <Text
        className={task.isCompleted ? "textCompleted" : ""}
        fontSize="14px"
        lineHeight="19px"
        color={task.isCompleted ? "#1d39dd" : "#F2F2F2"}
        marginRight="auto"
        textDecoration={task.isCompleted ? "line-through" : "none"} // Nuevo estilo de subrayado
      >
        {task.title}
      </Text>

      <Textarea
        className={task.isCompleted ? "textCompleted" : ""}
        fontSize="14px"
        lineHeight="19px"
        color={task.isCompleted ? "#1d39dd" : "black"}
        textDecoration={task.isCompleted ? "line-through" : "none"} 
        marginRight="auto"
      >
        {task.des}
      </Textarea>

      <Button
        className="editBoton"
        onClick={handleEditClick}
        size="sm"
        colorScheme="blue"
        variant="outline"
      >
        <Icon as= {FiEdit} size={20} />
      </Button>

      <Button
        className="deleteButton"
        onClick={() => onDelete(task.id)}
        size="sm"
        colorScheme="red"
        variant="outline"
      >
        <Icon as= {TbTrash} size={20} />
      </Button>
    </Box>
=======
    <div className={styles.task}>
      <button className={styles.checkContainer} onClick={() => onComplete(task.id)}>
        {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </button>
   
        <p className={task.isCompleted ? styles.textCompleted : ""}>
            {task.title}
        </p>
        <textarea className={task.isCompleted ? styles.textCompleted : ""}>
          {task.des}
        </textarea>
   <button className={styles.editBoton} onClick={handleEditClick}> <FiEdit size={20}/> </button>
      
      <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
        <TbTrash size={20} />
      </button>
    </div>
>>>>>>> a018da4372ded818c2db2186452a87f35a6fd56e
  )
}