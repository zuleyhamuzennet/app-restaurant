package com.ba.restaurant.builder;
import com.ba.restaurant.dto.MediaDTO;

public class MediaDTOBuilder extends DTOBuilder {

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
        mediaDTO.setId(getId());
        mediaDTO.setFileContent(this.fileContent);
        mediaDTO.setMediaName(this.mediaName);
        return mediaDTO;

    }
}
