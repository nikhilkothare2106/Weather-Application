import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
export default function InfoBox({ info }) {
  const COLD_URL =
    "https://images.unsplash.com/photo-1641672222794-536ad524a929?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
  const HOT_URL =
    "https://images.unsplash.com/photo-1581129724980-2ab2153c3d8d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww";
  return (
    <div className="flex w-full justify-center">
      <Card className="max-w-[490px] w-full rounded-lg">
        <CardMedia
          sx={{ height: 140 }}
          image={info.humidity > 88 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
            {info.humidity > 80 ? (
              <ThunderstormIcon />
            ) : info.temp > 15 ? (
              <WbSunnyIcon />
            ) : (
              <AcUnitIcon />
            )}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }} component={"span"}>
            <div>Temperature = {info.temp}&deg;</div>
            <div>Humidity = {info.humidity}</div>
            <div>Min Temp = {info.tempMin}</div>
            <div>Max Temp = {info.tempMax}</div>
            <div>Weather description = {info.weather}</div>
            <div>The weather feels like {info.feelsLike}&deg;</div>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
