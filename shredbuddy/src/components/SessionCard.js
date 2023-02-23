import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function SessionCard(props) {
    // destructure props
    const { session} = props
    //destructure session
    const {mountain, goals} = session
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt={mountain}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {mountain}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {goals}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
