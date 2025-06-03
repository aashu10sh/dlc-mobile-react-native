import { VideoView, useVideoPlayer } from 'expo-video';
import React from "react";
import { Dimensions, SafeAreaView, StyleSheet, View } from "react-native";

const YouTubePlayer = ({ videoURL }: { videoURL: string }) => {
  const screenWidth = Dimensions.get("window").width;
  const playerWidth = screenWidth - 32; // Add horizontal margin
  const height = playerWidth * (9 / 16);

  const player = useVideoPlayer(videoURL, (player) => {
    player.loop = false;
    player.play();
  });

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <View style={[styles.videoWrapper, { width: playerWidth, height }]}>
          <VideoView
            style={StyleSheet.absoluteFill}
            player={player}
            allowsFullscreen
            allowsPictureInPicture
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  videoWrapper: {
    backgroundColor: '#000',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 3, // Android shadow
    shadowColor: '#000', // iOS shadow`
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
});

export default YouTubePlayer;
