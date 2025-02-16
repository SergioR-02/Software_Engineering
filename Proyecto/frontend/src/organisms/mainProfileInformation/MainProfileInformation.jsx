import { useState } from 'react';
import BasicLayout from "../../templates/layout/BasicLayout";
import UserBasicInformation from "../../molecules/userBasicInformation/UserBasicInformation";
import ListButtons from "../../molecules/listButtons/ListButtons";
import "./MainProfileInformation.scss";

export default function MainProfileInformation() {
  // Estado para almacenar el botón seleccionado
  const [selectedButton, setSelectedButton] = useState("INFORMACIÓN DEL PERFIL");

  const buttons = [
    {
      nombre: "INFORMACIÓN DEL PERFIL",
      onClick: () => setSelectedButton("INFORMACIÓN DEL PERFIL")
    },
    {
      nombre: "MIS REPORTES",
      onClick: () => setSelectedButton("MIS REPORTES")
    }
  ];

  return (
    <BasicLayout>
      <div className="main-profile-information">
        <h1 className="main-profile-information__title">Perfil de Usuario</h1>
        <UserBasicInformation
          imageSrc="https://a.calameoassets.com/7368883/picture.jpg?_u=230511151316"
          name="Cristian Barrios"
          email="JuanPerez@gmail.com"
        />
        {/* Se pasa el botón seleccionado como prop */}
        <ListButtons 
          buttons={buttons} 
          selectedButton={selectedButton} 
          classNameC="p_main-profile-information__buttons" 
          className="main-profile-information__buttons" 
        />
      </div>
    </BasicLayout>
  );
}
