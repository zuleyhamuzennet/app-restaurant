package com.ba.restaurant.entity;
import javax.persistence.*;

@Entity
public class Media {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;


    private String mediaName;

    @Column(length = 100000000)
    private byte[] fileContent;

    public Media(long mediaId, String mediaName, byte[] fileContent) {
        this.mediaName = mediaName;
        this.fileContent = fileContent;
    }

    public Media() {

    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
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
