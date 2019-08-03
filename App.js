import { createStackNavigator, createAppContainer } from "react-navigation";

import ContentContainer from "./Components/Homescreen/ContentContainer";
import CategoryDetails from "./Components/HorizontalNavigator/CategoryDetails";
import News from "./Components/News/NewsNavigator/News";
import Videos from "./Components/Videos/Videos";
import VideoDetails from "./Components/Videos/VideoDetails";
import Podcast from "./Components/Podcast/Podcast";
import PodPlay from "./Components/PodPlay/Podplay";
import Movies from "./Components/Movies/Movies";
import MovieDetails from "./Components/Movies/MovieDetails";
import Crypto from "./Components/Cryptocurrency/Crypto";
import CryptoDetails from "./Components/Cryptocurrency/CryptoDetails";
import Auto from "./Components/Auto/Auto";
import AutoDetails from "./Components/Auto/AutoDetails";

const AppNavigator = createStackNavigator(
  {
    Home: ContentContainer,
    CategoryDetails: CategoryDetails,
    News: News,
    Videos: Videos,
    VideoDetails: VideoDetails,
    Podcast: Podcast,
    PodPlay: PodPlay,
    Movies: Movies,
    MovieDetails: MovieDetails,
    Cryptocurrency: Crypto,
    CryptoDetails: CryptoDetails,
    Auto: Auto,
    AutoDetails: AutoDetails
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);
