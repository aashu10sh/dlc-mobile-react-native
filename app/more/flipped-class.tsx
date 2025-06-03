import YouTubePlayer from "@/components/ui/youtube/YoutubePlayer";
import { MorePageInformation } from "@/constants/text";
import { ScrollView, StyleSheet, View } from "react-native";
import InfoGeneral from "../pages/InfoGeneral";

export default function FlippedClass() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.content}>
        <InfoGeneral
          title={MorePageInformation.FLIPPED_CLASS.title}
          text={MorePageInformation.FLIPPED_CLASS.content}
        />
        <YouTubePlayer videoURL="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 16,
    paddingBottom: 32,
  },
  content: {
    flex: 1,
  },
});
