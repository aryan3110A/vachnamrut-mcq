# Building the Vedic Quiz Android APK

This guide explains how to build and update the Android APK for the Vedic Quiz app.

## Prerequisites

✅ All installed:
- Node.js and npm
- JDK 17+
- Android Studio
- Capacitor (installed in project)

## Quick Build Commands

### For Future Updates

When you make changes to your web app, run:

```bash
# 1. Build the web app and sync to Android
npm run android:sync

# 2. Open in Android Studio
npm run android:open

# 3. In Android Studio: Build → Build Bundle(s) / APK(s) → Build APK(s)
```

Your APK will be located at:
```
android/app/build/outputs/apk/debug/app-debug.apk
```

### Alternative: Build via Command Line

```bash
# From project root
cd android
gradlew assembleDebug

# APK will be in: app/build/outputs/apk/debug/app-debug.apk
```

## App Configuration

### App Details
- **App Name**: Vedic Quiz Divine
- **Package ID**: com.vedicquiz.app
- **Fullscreen Mode**: ✅ Enabled (immersive mode, no status/navigation bars)

### Changing App Name or Package ID

Edit `capacitor.config.ts`:
```typescript
const config: CapacitorConfig = {
  appId: 'com.your.package',  // Change package ID
  appName: 'Your App Name',    // Change app name
  // ...
};
```

Then run:
```bash
npm run android:sync
```

## Fullscreen Configuration

The app is configured for true fullscreen experience:

1. **MainActivity.java** - Enables immersive mode (hides status bar and navigation bar)
2. **AndroidManifest.xml** - Configures window flags
3. **styles.xml** - Applies fullscreen theme

Users will see:
- ✅ No browser UI
- ✅ No status bar
- ✅ No navigation bar
- ✅ Looks 100% like a native Android app

## Directory Structure

```
android/
├── app/
│   ├── src/main/
│   │   ├── AndroidManifest.xml          # App permissions and config
│   │   ├── java/com/vedicquiz/app/
│   │   │   └── MainActivity.java        # Fullscreen mode code
│   │   └── res/
│   │       ├── values/styles.xml        # App theme
│   │       └── mipmap-*/                # App icons
│   └── build/outputs/apk/debug/         # Built APK location
└── build.gradle
```

## Customizing App Icon

1. Create app icons in various sizes
2. Use Android Studio's Image Asset tool:
   - Right-click `res` → New → Image Asset
   - Select your icon image
   - Generate all sizes automatically
3. Run `npm run android:sync`

## Installing APK on Device

### Method 1: Android Studio
1. Connect Android device via USB
2. Enable USB Debugging on device
3. In Android Studio: Run → Run 'app'

### Method 2: APK File
1. Copy `app-debug.apk` to device
2. Enable "Install from Unknown Sources" in device settings
3. Tap APK file to install

## Troubleshooting

### Build Fails
```bash
# Clean and rebuild
cd android
gradlew clean
gradlew assembleDebug
```

### Changes Not Showing
```bash
# Always sync after web changes
npm run build
npx cap sync android
```

### Fullscreen Not Working
- Check MainActivity.java has immersive mode code
- Verify styles.xml has fullscreen flags
- Test on physical device (emulator may behave differently)

## Creating a Release APK (for Google Play Store)

For production release:

1. Generate a keystore:
```bash
keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

2. Configure signing in `android/app/build.gradle`

3. Build release APK:
```bash
cd android
gradlew assembleRelease
```

4. APK location: `app/build/outputs/apk/release/app-release.apk`

## Next Steps

Your APK is ready! You can now:
- Install it on Android devices
- Share the APK file with users
- Upload to Google Play Store (after creating release version)
