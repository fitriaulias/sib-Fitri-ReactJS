Yang harus diinstall
1. install expo
2. npm install -g eas-cli > untuk build
3. npm install -g sharp-cli 
4. setup avd (android studio)
5. alternative emulator > memu
6. setup adb


7. instalasi react native
-expo create-expo-app my-app
-expo init my-app
-running expo:
    - npx expo start
    - npx expo run: android
    - npx expo run: ios
- npx expo start -c (untuk ngeclear metro bundler)
- ctrl + m (kalo udah nampil di emulator, shortcut untuk developer menu expo)
- adb shell input keyevent 82
- npx expo start --no-dev --minify (buat production)

8. deploy app react native (production/generate apk)
- expo login (disaat pertama kali)
- expo whoami
- install eas (disaat pertama kali)
- eas build:configure (generate file - - eas.json, untuk custom production)
- eas build --platform android
- eas build --platform ios
- eas build:list (new tab terminal untuk cek status build)
- expo build:status (buat melihat status expo generate)

9. kalo aplikasi aab
eas build -p android --profile preview

"preview": {
            "android": {
                "buildType": "apk"
            }
        },

https://docs.expo.dev/
https://reactnative.dev/
https://snack.expo.dev/

boleh pake emulator, boleh pake expo go
