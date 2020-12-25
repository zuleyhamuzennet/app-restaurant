package com.ba.restaurant.builder;
import com.ba.restaurant.entity.Media;

public class MediaBuilder extends DTOBuilder {

    private String mediaName;
    private byte[] fileContent;

    public MediaBuilder id(Long id){
        this.setId(id);
        return this;
    }

    public MediaBuilder mediaName(String mediaName){
        this.mediaName=mediaName;
        return this;
    }

    public MediaBuilder fileContent(byte[] fileContent){
        this.fileContent=fileContent;
        return this;
    }

    @Override
    public Media build(){

        Media media = new Media();
        media.setId(getId());
        media.setFileContent(this.fileContent);
        media.setMediaName(this.mediaName);
        return media;
    }
}
