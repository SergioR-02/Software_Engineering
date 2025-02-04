import BasicLayout from "../../templates/layout/BasicLayout";
import Icon from "../../atoms/icon/Icon";
import "./BasicInformation.scss";


const BasicInformation = () => {


  return (
    <BasicLayout>
      <article className="basic-information">
        <div className="basic-information__content">
          <h1 className="basic-information__title">Objetos Perdidos</h1>
          <p className="basic-information__paragraph">
            Ayudamos a la comunidad universitaria a recuperar sus objetos perdidos y a devolver los objetos encontrados a sus dueños.
          </p>
          <button>epa</button>
        </div>
        <Icon name="home_Icon" size={340} className="borderRadius"/>
      </article>
    </BasicLayout>
  );
}

export default BasicInformation;
