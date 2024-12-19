This bug occurs when using the Expo Constants API to access the device's unique identifier.  The `Constants.deviceId` property sometimes returns `null` or an empty string, even on devices where it should be present.  This inconsistency makes it difficult to reliably identify and track users.  The issue is particularly noticeable on Android devices, where the behaviour seems more unpredictable. The code below demonstrates the issue: