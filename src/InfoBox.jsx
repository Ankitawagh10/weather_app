import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import UmbrellaIcon from '@mui/icons-material/Umbrella';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1545134969-8debd725b007?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
     
    const HOT_URL= "https://plus.unsplash.com/premium_photo-1670469009826-db07ab733925?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90fGVufDB8fDB8fHww";
    const COLD_URL= "https://plus.unsplash.com/premium_photo-1673240367281-15d476723285?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9nfGVufDB8fDB8fHww";
    const RAIN_URL= "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D";

    
  return (
    <div className="InfoBox">
      <h1>WeatherInfo-{info.weather}</h1>
      <div className='cardContainer'>
        <Card sx={{ maxWidth: 350 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity>80
               ? RAIN_URL
               :info.temp>15
               ?HOT_URL
              
               :COLD_URL
  
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}{
                info.humidity>80
               ? <UmbrellaIcon/>
               :info.temp>15
               ?<WbSunnyIcon/>
              
               :<BeachAccessIcon/>
              }
            </Typography>
            <Typography variant="body2" color="text.secondary" component={"span"}>
              <div>temp={info.temp}&deg;C</div>
              <div>humidity={info.humidity}%</div> {/* Fix the unit here */}
              <div>Min Temp={info.tempMin}&deg;C</div>
              <div>Max Temp={info.tempMax}&deg;C</div>
              <p>The weather can be described as {info.weather} and feels like {info.feelslike}</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
