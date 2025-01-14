import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}){
    const INIT_URL="https://media.istockphoto.com/id/157561714/photo/beautiful-sunset.jpg?s=1024x1024&w=is&k=20&c=wGJ1420utjbzG1yk4dxdIUKwymRmWaRkpCxW53SwU_4="
    const HOT_URL="https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL="https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=612x612&w=is&k=20&c=GMlTyTFSxiKCiWyDI-NjFFN0RX6Z5yzRbdR3ThuJEyA=";
    return(
        <div className="info">
        
          <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
               sx={{ height: 140 }}
               image={info.humidity>80 
                      ? RAIN_URL 
                      :info.temp>16
                      ? HOT_URL
                      :COLD_URL
                    }
               title={info.humidity>80 
                ? "rainy" 
                :info.temp>16
                ? "hot summer"
                :"cold"
              }
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
               {info.city}&nbsp;{
                info.humidity>80 
                ? <ThunderstormIcon />
                :info.temp>16
                ? <WbSunnyIcon/>
                :<AcUnitIcon/>
               }
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                 <p>Temperature={info.temp}&deg;</p>
                 <p>Humidity={info.humidity}</p>
                 <p>Min Temp={info.tempMin}&deg;</p>
                 <p>Max Temp={info.tempMax}&deg;</p>
                 <p>Weather can be decribed as <i>{info.weather}</i> and feels like {info.feelsLike}
                 </p>
              </Typography>
            </CardContent>
      
            </Card>
          </div>
        </div>
    )
}