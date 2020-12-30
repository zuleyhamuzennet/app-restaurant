package com.ba.restaurant.controller;

import com.ba.restaurant.builder.MediaBuilder;
import com.ba.restaurant.dto.MediaDTO;
import com.ba.restaurant.builder.MediaDTOBuilder;
import com.ba.restaurant.entity.Media;
import com.ba.restaurant.service.MediaService;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@RunWith(MockitoJUnitRunner.class)
public class MediaControllerTest {

    @InjectMocks
    MediaController mediaController;

    @Mock
    MediaService mediaService;
    private Media media = new Media();
    private MediaDTO mediaDTO = new MediaDTO();

    @Before
    public void setUp() {
        media = new MediaBuilder().id(1L).fileContent(null).mediaName("deneme").build();
        mediaDTO = new MediaDTOBuilder().id(1L).fileContent(null).mediaName("deneme").build();
    }

    @Test
    public void shouldAddMedia() throws IOException {
        String name = "adv";
        Mockito.when(mediaService.addfile(Mockito.any(),Mockito.any())).thenReturn("eklendi");
        MultipartFile multipartFile = null;
        String res = mediaController.addMedia(multipartFile,name);
        Assert.assertNotNull(res);
    }

    @Test
    public void shouldListMedia() {
        List<MediaDTO> mediaDTOS = new ArrayList<>();
        mediaDTOS.add(mediaDTO);
        Mockito.when(mediaService.getAllMedia()).thenReturn(mediaDTOS);
        List<MediaDTO> res = mediaController.getAllMedia();
        Assert.assertEquals(res, mediaDTOS);
    }
}