import React, { useState } from "react";
import {
  Box,
  IconButton,
  Text,
  Textarea,
  useColorModeValue,
  Card,
  CardFooter,
  CardBody,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon, CheckIcon, CloseIcon } from "@chakra-ui/icons";

const Task = ({
  task,
  titulo,
  descripcion,
  estado,
  onDelete,
  onUpdate,
  onComplete,
}) => {
  const textColor = useColorModeValue("black", "#F2F2F2");
  const textDecorationColor = useColorModeValue("#1d39dd", "#1d39dd");
  const colors = {
    pendiente: "red.400",
    en_progreso: "yellow.400",
    completa: "green.400",
  };
  const [isEditing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(titulo);
  const [newDes, setNewDes] = useState(descripcion);
  const [newEst, setNewEst] = useState(estado);

  const backgroundColor = colors[newEst];
  const textColorForState = newEst === "completa" ? "white" : "black";

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    onUpdate(task._id, newTitle, newDes, newEst);
    setEditing(false);
  };

  const handleCancelClick = () => {
    setNewTitle(titulo);
    setNewDes(descripcion);
    setNewEst(estado);
    setEditing(false);
  };

  const handleCompleteClick = (newState) => {
    if (newState === "en_progreso" || newState === "completa") {
      setNewEst(newState);
      onUpdate(task._id, newTitle, newDes, newState);
    }
  };

  return (
    <Card marginBottom={4} backgroundColor={backgroundColor}>
      <CardBody>
        {isEditing ? (
          <Textarea
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            color={textColor}
          />
        ) : (
          <Text
            fontSize="lg"
            fontWeight="bold"
            color={textColorForState}
            textDecoration={task.isCompleted ? textDecorationColor : "none"}
          >
            {newTitle}
          </Text>
        )}
        <Textarea
          value={newDes}
          onChange={(e) => setNewDes(e.target.value)}
          color={textColorForState}
          textDecoration={task.isCompleted ? textDecorationColor : "none"}
        />
      </CardBody>
      <CardFooter justifyContent="space-between">
        {isEditing ? (
          <>
            <IconButton
              icon={<CheckIcon />}
              onClick={handleSaveClick}
              color={useColorModeValue("gray.400", "gray.500")}
            />
            <IconButton
              icon={<CloseIcon />}
              onClick={handleCancelClick}
              color={useColorModeValue("gray.400", "gray.500")}
            />
          </>
        ) : (
          <>
            <IconButton
              icon={<EditIcon />}
              onClick={handleEditClick}
              color={useColorModeValue("blue.400", "blue.500")}
            />
            <IconButton
              icon={<DeleteIcon />}
              onClick={() => onDelete(task._id)}
              color={useColorModeValue("red.400", "red.500")}
            />
            <IconButton
              icon={<CheckIcon />}
              onClick={() => handleCompleteClick("en_progreso")} // Cambiar el estado a "En Progreso"
              color={useColorModeValue("blue.400", "yellow.400")} // Cambiar el color
            />
            <IconButton
              icon={<CheckIcon />}
              onClick={() => handleCompleteClick("completa")} // Cambiar el estado a "Completado"
              color={useColorModeValue("blue.400", "green.400")} // Cambiar el color
            />
          </>
        )}
      </CardFooter>
    </Card>
  );
};

export default Task;
