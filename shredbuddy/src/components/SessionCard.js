import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
// import Calendar from 'react-calendar';

export default function SessionCard(props) {
    // destructure props
    const {session } = props
    //destructure session
    const {mountain, date, goals} = session
    
  return (
    <div className="sessionCard">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://i.imgur.com/jPkWqhy.jpg,https://i.imgur.com/0bw8kOZ.jpg,https://i.imgur.com/jPkWqhy.jpg"
          alt={mountain}/>
        <CardContent>
          <Typography gutterBottom variant="h3" component="div">
          <Link to={`/session/${session.id}`}>
          {mountain}
            </Link> 
          </Typography>
          <Typography gutterBottom varient= "h5" component="div">
            {date}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {goals}
          </Typography>
        </CardContent>
        
      </CardActionArea>
    </Card>
    </div>
  );
}
