import multer from 'multer';

import fs from 'fs';
import { supabase } from '../../utils/supabase';
import { UploadFile } from './document.interface';

export const uploadDocumentToSupabase = async (file: UploadFile) => {
  try {
    const filePath = file.path;
    const fileName = `uploads/${file.originalname}`;
    const fileBuffer = await fs.promises.readFile(filePath);

    const { error: uploadError } = await supabase.storage
      .from('documents')
      .upload(fileName, fileBuffer, {
        contentType: file.mimetype,
      });

    if (uploadError) {
      throw new Error(`Supabase upload failed: ${uploadError.message}`);
    }

    const file_data = supabase.storage.from('documents').getPublicUrl(fileName);

    // Delete the local file after uploading
    await fs.promises.unlink(filePath);

    return {
      publicURL: file_data.data.publicUrl,
    };
  } catch (err: unknown) {
    console.error('Error uploading document to Supabase:', err);
    throw err;
  }
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, process.cwd() + '/uploads');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix);
  },
});

export const upload = multer({ storage: storage });
