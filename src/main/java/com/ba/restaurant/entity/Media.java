package com.ba.restaurant.entity;

import javax.persistence.*;

@Entity
public class Media {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long mediaId;

    private String mediaName;

    @Column(length = 100000000)
    private byte[] fileContent;

    public Media(long mediaId, String mediaName, byte[] fileContent) {
        this.mediaId = mediaId;
        this.mediaName = mediaName;
        this.fileContent = fileContent;
    }

    public Media() {

    }

    public long getMediaId() {
        return mediaId;
    }

    public void setMediaId(long mediaId) {
        this.mediaId = mediaId;
    }

    public String getMediaName() {
        return mediaName;
    }

    public void setMediaName(String mediaName) {
        this.mediaName = mediaName;
    }

    public byte[] getFileContent() {
        return fileContent;
    }

    public void setFileContent(byte[] fileContent) {
        this.fileContent = fileContent;
    }
}
