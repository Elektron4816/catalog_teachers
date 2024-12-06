import "./PopUp.css";
import closeBtn from "../../../image/CloseBlack.svg";
import { useEffect } from "react";
import useLocalStorage from "use-local-storage";

function PopUp(props) {
  const { teacher_id } = props;
  const [client_id] = useLocalStorage("number");
  console.log("local", client_id);

  useEffect(() => {
    const textarea = document.getElementById("textarea");
    textarea.addEventListener("input", function () {
      this.style.height = "auto";
      this.style.height = this.scrollHeight + "px";
    });
  });

  return (
    <div className="popup" id="popup" onClick={handleClose}>
      <div className="popup-content">
        <div className="popup-close-button">
          <img src={closeBtn} alt="closeBtn" onClick={closePopup} />
        </div>
        <p>Добавить отзыв о педагоге</p>
        <textarea
          id="textarea"
          placeholder="Расскажите как прошло занятие с педагогом.."
          required
        ></textarea>
        <button
          type="submit"
          onClick={() => handleSubmit(client_id, teacher_id)}
        >
          Отправить
        </button>
      </div>
    </div>
  );
}

export default PopUp;

function handleClose(e) {
  if (e.target.id === "popup") {
    document.querySelector(".popup").classList.remove("show");
    // document.querySelector('.popup').style.display = 'none';
    document.getElementsByTagName("body")[0].style.overflow = "scroll";
  }
}
function closePopup() {
  document.querySelector(".popup").classList.remove("show");
  // document.querySelector('.popup').style.display = 'none';
  document.getElementsByTagName("body")[0].style.overflow = "scroll";
}

function handleSubmit(client_id, teacher_id) {
  const text = document.getElementById("textarea").value;
  if (text.trim() === "") {
    alert("Заполните поле отзыва");
    return;
  }
  // Send form data to server or database

  const urlFromFeedback = `/sendFeedback?teacher_id=${teacher_id}&client_id=${client_id}&feedback_text=${text}`;
  fetch(urlFromFeedback)
    .then((response) => response.text())
    .then((data) => {
      // console.log(data);
    })
    .catch((error) => console.error("Error:", error));
  // console.log("Отзыв отправлен");
  closePopup();
  document.getElementById("textarea").value = '';
}