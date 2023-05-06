 CREATE TABLE IF NOT EXISTS folders (
    id INTEGER PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    folder INTEGER,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    CONSTRAINT folders_fk FOREIGN KEY (folder) REFERENCES folders (id) ON DELETE CASCADE
);

-- INSERT INTO folders (id, name, folder) VALUES (1, 'Root Folder', NULL);