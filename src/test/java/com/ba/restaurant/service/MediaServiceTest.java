package com.ba.restaurant.service;

import com.ba.restaurant.builder.MediaBuilder;
import com.ba.restaurant.dto.MediaDTO;
import com.ba.restaurant.entity.Media;
import com.ba.restaurant.repository.MediaRepository;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.mock.web.MockMultipartFile;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;

@RunWith(MockitoJUnitRunner.class)
public class MediaServiceTest {

    @InjectMocks
    MediaService mediaService;

    @Mock
    MediaRepository mediaRepository;

    private MediaDTO mediaDTO = new MediaDTO();
    private List<Media> mediaList = new ArrayList<>();

    byte[] b = {(byte) 0xe0, 0x4f, (byte) 0xd0,
            0x20, (byte) 0xea, 0x3a, 0x69, 0x10, (byte) 0xa2, (byte) 0xd8, 0x08, 0x00, 0x2b,
            0x30, 0x30, (byte) 0x9d};
    byte[] json = " {\"name\":\"deneme\"}".getBytes(StandardCharsets.UTF_8);
    MockMultipartFile file = new MockMultipartFile("json", "json", "application/json", json);
    private Media media = new MediaBuilder().id(1L).mediaName("deneme").fileContent(b).build();

    @Test
    public void ShouldListAllMedia() {
        mediaList.add(media);
        Mockito.when(mediaRepository.findAll()).thenReturn(mediaList);
        List<MediaDTO> response = mediaService.getAllMedia();
        Assert.assertNotNull(response);

    }

    @Test
    public void shouldAddMedia() throws IOException {
        mediaList.add(media);
        Mockito.when(mediaRepository.save(Mockito.any())).thenReturn(media);
        String res = mediaService.addfile(file, "zar.png");
        Assert.assertNotNull(res);
    }


}