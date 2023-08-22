import imgDelete from "../../img/trash.svg";
import "./style.css";

function Message({ imgPerfil, message }) {
    return (
        <div className="section-comment">
            <div className="section-comment-user">
                <img className="img-perfil" src={imgPerfil} alt="Perfil" />
                <p className="text-comment">{message}</p>
            </div>
            <img className="img-delete" src={imgDelete} alt="excluir" />
        </div>
    )
}

export default Message;