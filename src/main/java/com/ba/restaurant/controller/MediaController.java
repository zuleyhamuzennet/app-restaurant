package com.ba.restaurant.controller;

import com.ba.restaurant.dto.MediaDTO;
import com.ba.restaurant.service.MediaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/media")
public class MediaController {

    @Autowired
    MediaService mediaService;

    @PostMapping("/add")
    public String addMedia(@RequestParam("file") MultipartFile file, @RequestParam String imageName) throws IOException {
        return mediaService.addfile(file, imageName);
    }

    @GetMapping("/list")
    public List<MediaDTO> getAllMedia() {
        return mediaService.getAllMedia();
    }

}
