package com.ba.restaurant.service;

import com.ba.restaurant.dto.MediaDTO;
import com.ba.restaurant.entity.Media;
import com.ba.restaurant.mapper.MediaMapper;
import com.ba.restaurant.repository.MediaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.*;
import java.util.ArrayList;
import java.util.List;

@Service
public class MediaService {

    private static final String JPG_EXTENSION = ".jpg";
    private static final String PNG_EXTENSION = ".png";
    private static final String BMG_EXTENSION = ".bmg";

    private static final String BMP_CONTENT = "image/bmp";
    private static final String PNG_CONTENT = "image/png";

    @Value("${file.upload.directory}")
    private String uploadDir;

    @Autowired
    MediaRepository mediaRepository;

    public List<MediaDTO> getAllMedia() {
        List<MediaDTO> mediaDTOS = new ArrayList<>();
        List<Media> mediaList = mediaRepository.findAll();
        mediaList.forEach(media -> mediaDTOS.add(MediaMapper.INSTANCE.toDTO(media)));
        return mediaDTOS;
    }

    public String addfile(MultipartFile file, String imageName) throws IOException {
        Files.createDirectories(Paths.get(uploadDir));
        String filePath = generateFullFilePath(file);
        Path targetLocation = FileSystems.getDefault().getPath(filePath);
        Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);

        byte[] bytes = file.getBytes();

        Media media = new Media();
        media.setFileContent(bytes);
        media.setMediaName(imageName);
        mediaRepository.save(media);
        return imageName + "eklendi...";

    }

    private String generateUUID() {
        return String.valueOf(java.util.UUID.randomUUID());

    }

    private String generateFullFilePath(MultipartFile file) {
        String extension = JPG_EXTENSION;
        if (BMP_CONTENT.equals(file.getContentType())) {
            extension = BMG_EXTENSION;
        } else if (PNG_CONTENT.equals(file.getContentType())) {
            extension = PNG_EXTENSION;
        }
        return uploadDir + generateUUID() + extension;
    }
}
