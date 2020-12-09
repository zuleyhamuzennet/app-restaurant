package com.ba.restaurant.dtoBuilder;

import com.ba.restaurant.builder.MediaBuilder;
import com.ba.restaurant.dto.MediaDTO;
import com.ba.restaurant.entity.Media;

public class MediaDTOBuilder extends DTOBuilder {
    private long mediaId;
    private String mediaName;
    private byte[] fileContent;

    public MediaDTOBuilder id(Long id){
        this.setId(id);
        return this;
    }
    public MediaDTOBuilder mediaName(String mediaName){
        this.mediaName=mediaName;
        return this;
    }
    public MediaDTOBuilder fileContent(byte[] fileContent){
        this.fileContent=fileContent;
        return this;
    }
    @Override
    public MediaDTO build(){
        MediaDTO mediaDTO = new MediaDTO();
        mediaDTO.setMediaId(getId());
        mediaDTO.setFileContent(this.fileContent);
        mediaDTO.setMediaName(this.mediaName);
        return mediaDTO;

    }
}
