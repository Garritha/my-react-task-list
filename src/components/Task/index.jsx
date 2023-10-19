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
import Swal from "sweetalert2";

const Task = ({ task, titulo, descripcion, estado, onDelete, onMoveToDeletedTasks, onUpdate }) => {
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
  const backgroundColor = colors[estado];
  const textColorForState = estado === "completa" ? "white" : "black";

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    onUpdate(task._id, newTitle, newDes, estado);
    setEditing(false);
  };

  const handleCancelClick = () => {
    setNewTitle(titulo);
    setNewDes(descripcion);
    setEditing(false);
  };



  const handleMoveToDeletedClick = () => {
    Swal.fire({
      title: "¿Mover a Tareas Eliminadas?",
      text: "Esta acción moverá la tarea a la colección de tareas eliminadas. ¿Deseas continuar?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, mover a eliminadas",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        onMoveToDeletedTasks(task._id);
      }
    });
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
            textDecoration={estado === "completa" ? textDecorationColor : "none"}
          >
            {newTitle}
          </Text>
        )}
        <Textarea
          value={newDes}
          onChange={(e) => setNewDes(e.target.value)}
          color={textColorForState}
          textDecoration={estado === "completa" ? textDecorationColor : "none"}
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
           
            {estado !== "completa" && (
              <IconButton
                icon={<CheckIcon />}
                onClick={() => onUpdate(task._id, newTitle, newDes, "completa")}
                color={useColorModeValue("blue.400", "green.400")}
              />
            )}
            <IconButton
              icon={<DeleteIcon />}
              onClick={handleMoveToDeletedClick}
              color={useColorModeValue("blue.400", "green.400")}
            />
          </>
        )}
      </CardFooter>
    </Card>
  );
};

export default Task;
