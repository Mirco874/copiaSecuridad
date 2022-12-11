import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom"
import { get } from "../../helpers";
import AceEditor from "react-ace";
export const CheckTasksPage = () => {
    const {id_tarea}=useParams();
    const [tasks,setTasks]=useState([]);

    const getTasks=async()=>{
        const tasksUploaded=await get(`http://142.93.203.113:3001/api/task/${id_tarea}/responses`);
        await setTasks(tasksUploaded)
    }

    useEffect(()=>{getTasks()},[])


  return (
    <div className="mt-4">
        {tasks.map((task)=><>
                    <h4>respuesta de la tarea para el capitulo con id:  {task.id_capitulo}</h4>
                    <br />    
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1"> <b>Nombre: </b> {task.id_usuario}</label>
                        <p></p>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1"> <b>Mensaje:</b> {task. mensaje} </label>
                        <p></p>
                    </div>

                   
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1"> <b>enlace: </b>{""} </label>
                        <p></p>
                    </div>

                    <label for="exampleFormControlTextarea1"> <b>Codigo:</b> </label>
                    <AceEditor mode={"Java"}
                            style={{height:"20vh",border:"1px solid black"}}
                            fontSize={14}
                            value={task.codigo}
                            setOptions={{
                            enableLiveAutocompletion: true,
                            showLineNumbers: true,
                            }}
                            editorProps={{ $blockScrolling: false }}
                            />
                            <br />
                    <br />



        </>)}



    </div>
  )
}
