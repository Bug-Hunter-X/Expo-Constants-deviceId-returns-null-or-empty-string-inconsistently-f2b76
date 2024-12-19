# Expo Constants.deviceId Inconsistency

This repository demonstrates a bug where `Constants.deviceId` in Expo returns `null` or an empty string inconsistently, primarily affecting Android devices.  The issue makes it difficult to rely on `Constants.deviceId` for tasks requiring unique user identification.

## Problem

The `Constants.deviceId` property, intended to provide a unique identifier for each device, occasionally returns `null` or an empty string. This behaviour is not consistent across devices or even across subsequent app launches on the same device. This inconsistency disrupts functionalities that depend on reliable device identification, such as user tracking or data persistence.

## Solution

The provided solution uses a combination of approaches to mitigate the problem.  It involves a fallback mechanism to generate a UUID if `Constants.deviceId` is invalid and persistently storing this identifier using AsyncStorage.  This ensures a consistent identifier across sessions even if `Constants.deviceId` fails to provide a value.

## How to Reproduce

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Run the app on both Android and iOS devices.
4. Observe the output in the console, noting inconsistencies in `Constants.deviceId`.

## Contributing

Contributions are welcome. Please open an issue or submit a pull request if you have improvements or additional insights into this problem.