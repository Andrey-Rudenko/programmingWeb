
import { Rating, Typography } from "@mui/material";

const HistoryForm = () => {

    var data = "05.01.2000";
    var format = "Собеседник";
    var companionLink = "";
    var companionMail = "vovaKrut@mail.ru";

    return (
        <div className="profile">
            <form className="form">
                <h3>{data}</h3>
                <h4>Формат общения: {format}</h4>
                <a href="{companionLink}">Профиль собеседника</a>
                <h4>Почта собеседника: {companionMail}</h4>
                <div>
                    <Typography component="legend">Оставить отзыв</Typography>
                    <Rating
                        name="simple-controlled"
                        
                    />
                </div>
               
            </form>
        </div>
    );
}

export default HistoryForm;