const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const audioFiles = [
    'D:/Multimedia_database_system/BTL/chim/bimbip/01-bimbip.mp3',
    'D:/Multimedia_database_system/BTL/chim/bimbip/02-bimbip.mp3',
    'D:/Multimedia_database_system/BTL/chim/bimbip/03-bimbip.mp3'
];

// API để trả về file âm thanh cụ thể dựa trên index trong mảng audioFiles
app.get('/api/audioFiles/:fileName', (req, res) => {
    const fileName = req.params.fileName;
    const audioFile = audioFiles.find(file => file.endsWith(fileName));
    if (audioFile) {
        res.sendFile(audioFile);
    } else {
        res.status(404).json({ error: 'File not found' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
