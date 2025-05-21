import java.awt.*;
import java.io.File;
import javax.swing.*;

public class ShowDocs {
    public static void openDocumentsFolder(Component parent, String applicationId) {
        // Adjust the path as needed for your project structure
        String folderPath = System.getProperty("user.dir") + "/../backend/uploads/" + applicationId;
        File folder = new File(folderPath);
        if (!folder.exists() || !folder.isDirectory()) {
            JOptionPane.showMessageDialog(parent, "Folder does not exist:\n" + folderPath);
            return;
        }
        try {
            Desktop.getDesktop().open(folder);
        } catch (Exception ex) {
            JOptionPane.showMessageDialog(parent, "Could not open folder:\n" + folderPath + "\n" + ex.getMessage());
        }
    }
}