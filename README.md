# UUID Generator Node.js

[![npm Version](https://img.shields.io/npm/v/uuid-gen-nodejs?style=flat-square)](https://www.npmjs.com/package/uuid-gen-nodejs)
[![npm Downloads](https://img.shields.io/npm/dm/uuid-gen-nodejs?style=flat-square)](https://www.npmjs.com/package/uuid-gen-nodejs)
[![License](https://img.shields.io/npm/l/uuid-gen-nodejs?style=flat-square)](LICENSE)
[![Node Version](https://img.shields.io/node/v/uuid-gen-nodejs?style=flat-square)](https://www.npmjs.com/package/uuid-gen-nodejs)
[![GitHub Stars](https://img.shields.io/github/stars/mizoz/uuid-gen-nodejs?style=flat-square)](https://github.com/mizoz/uuid-gen-nodejs)

> A Node.js CLI tool for generating UUIDs (Universally Unique Identifiers).

## Features

- Generate UUID v4 (random)
- Generate UUID v1 (timestamp-based)
- Bulk UUID generation
- Multiple output formats
- JavaScript/TypeScript API

## Installation

### From npm

```bash
npm install -g uuid-gen-nodejs
```

### From Source

```bash
git clone https://github.com/mizoz/uuid-gen-nodejs.git
cd uuid-gen-nodejs
npm install
```

## Usage

### Command Line

```bash
# Generate a single UUID v4
uuid-gen

# Generate UUID v1
uuid-gen --v1

# Generate multiple UUIDs
uuid-gen --count 10
```

### JavaScript API

```javascript
const { UUIDGenerator } = require("uuid-gen-nodejs");

const gen = new UUIDGenerator();

// Generate UUID v4
const uuid = gen.generateV4();
console.log(uuid);

// Generate UUID v1
const uuid = gen.generateV1();
console.log(uuid);
```

## Requirements

- Node.js 14+

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Author

**mizoz**
- GitHub: [@mizoz](https://github.com/mizoz)

---

⭐ If you find this project useful, please consider giving it a star on GitHub!
