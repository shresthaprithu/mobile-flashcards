import React from 'react';
import { AsyncStorage } from 'react-native';
import { Notifications } from 'expo';

import * as Permissions from 'expo-permissions';

const NOTIFICATION_KEY = 'MobileFlashcard:notifications';
const CHANNEL_ID = 'DailyReminder';

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
      Notifications.cancelAllScheduledNotificationsAsync
  );
}

function createNotification() {
  return {
    title: 'Mobile Flashcard',
    body: "Keep up the spirit! Don't forget to study for today!",
    ios: {
      sound: true
    },
    android: {
      channelId: CHANNEL_ID,
      sticky: false,
      color: 'red'
    }
  };
}

function createChannel() {
  return {
    name: 'Daily Reminder',
    description: 'This is a daily reminder for you to study your flashcards.',
    sound: true,
    priority: 'high'
  };
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
      .then(JSON.parse)
      .then(data => {
        if (data === null) {
          Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync();
              
              const tomorrow = new Date();
              
              tomorrow.setDate(tomorrow.getDate() + 1);
              tomorrow.setHours(20);
              tomorrow.setMinutes(0);
              
              Notifications.scheduleLocalNotificationAsync(
                  createNotification(),
                  {
                    time: tomorrow,
                    repeat: 'day'
                  }
              );
              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
            }
          });
        }
      });
}