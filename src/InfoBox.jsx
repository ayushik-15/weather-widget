import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import CloudIcon from '@mui/icons-material/Cloud';


export default function InfoBox({ info }) {
    const INIT_URL = "https://images.unsplash.com/photo-1566321343730-237ec35e53f3?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const HOT_URL = "https://images.unsplash.com/photo-1532241674611-87167b36235f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1637037204397-9595cc7223a7?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const getImage = () => {
        if (info.weather.includes("rain") || info.weather.includes("drizzle") || info.weather.includes("thunderstorm")) {
            return RAIN_URL;
        } else if (info.temp > 30) {
            return HOT_URL;
        } else if (info.temp < 10) {
            return COLD_URL;
        } else {
            return INIT_URL;
        }
    }
    return (
        <div className="InfoBox">

            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={getImage()}
                        title="weather"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}{" "}{
                                info.weather.includes("rain") || info.weather.includes("thunderstorm")
                                    ? <ThunderstormIcon />
                                    : info.temp > 30
                                        ? <SunnyIcon />
                                        : info.temp < 10
                                            ? <AcUnitIcon />
                                            : <CloudIcon />
                            }
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <div><b>Temperature:</b> {info.temp}&deg;C</div>
                            <div><b>Humidity:</b> {info.humidity}</div>
                            <div><b>Min Temp:</b> {info.tempMin}&deg;C</div>
                            <div><b>Max Temp:</b> {info.tempMax}&deg;C</div>
                            <div>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C </div>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}