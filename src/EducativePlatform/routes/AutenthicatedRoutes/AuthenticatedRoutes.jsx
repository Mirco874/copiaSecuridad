import { Navigate, Route, Routes } from "react-router-dom";
import { NavBar, SideBar } from "../../components";
import { CheckTasksPage } from "../../components/CheckTasksPage/CheckTasksPage";
import { existLogedUser } from "../../helpers";

import { ClassContent, ClassPage, CodeEditorPage, CreateContentPage, JoinClassPage, MaterialPage, PracticePage, RegisterClassPage } from "../../pages";
import { CreateTaskPage } from "../../pages/CreateTaskPage/CreateTaskPage";
import { TaskResponses } from "../../pages/TaskResponses/TaskResponses";
import { TasksPage } from "../../pages/TasksPage/TasksPage";

export const AuthenticatedRoutes = () => {

  return (
      <div className="row w-100">
        <div className="col-12 w-100">
          <NavBar color="light" userName={"asdsa"} logged={"true"}/>
        </div>
        <div className="col-2">
          <SideBar />
        </div>
        <div className="main-content col-10">
          <Routes>
            <Route path="" element={<ClassPage/>} />
            <Route path="/crear-clase" element={existLogedUser()?<RegisterClassPage/>:<Navigate to="/"/>}/>
            <Route path="/unirse-clase" element={existLogedUser()? <JoinClassPage/> :<Navigate to="/"/>}/>
            <Route path="/:id" element={ existLogedUser()?<ClassContent/>:<Navigate to="/"/>}/>
            <Route path="/:id/crear-capitulo" element={existLogedUser()?<CreateContentPage/>:<Navigate to="/"/>}/>
            <Route path="/:id/material/:id_capitulo" element={existLogedUser()?<MaterialPage/>:<Navigate to="/"/>}/>
            <Route path="/:id/practica/:id_practica" element={existLogedUser()?<PracticePage/>:<Navigate to="/"/>}/>
            <Route path="/:id/practica/:id_practica/compilador/:id_ejemplo" element={existLogedUser()?<CodeEditorPage/>:<Navigate to="/"/>}/>
           
            <Route  path="/:id/capitulo/:id_capitulo/crear-tarea" element={existLogedUser()?<CreateTaskPage/>:<Navigate to="/"/>}/>
            <Route path="/:id/capitulo/:id_capitulo/tareas" element={existLogedUser()?<TasksPage/>:<Navigate to="/"/>}/>
            <Route  path="/:id/capitulo/:id_capitulo/tareas/:id_tarea/entregar-tarea" element={existLogedUser()?<TaskResponses/>:<Navigate to="/"/>}/>
            <Route  path="/:id/capitulo/:id_capitulo/tareas/:id_tarea/revisar-entregas" element={existLogedUser()?<CheckTasksPage/>:<Navigate to="/"/>}/>
         
         CheckTasksPage
          </Routes>
        </div>
      </div>
  );
};
