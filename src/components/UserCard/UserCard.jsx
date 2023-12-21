import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const UserCard = (props) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={props.img}
                    alt="Comp_01"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.name}
                    </Typography>
                    <Typography variant="h6" color="text.secondary" component="div">
                        {props.offer}
                    </Typography>
                    <div style={{ marginTop: "20px"}}>
                        <Typography
                            variant="caption"
                            color="text.secondary"
                        >
                            {props.date}
                        </Typography>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default UserCard;