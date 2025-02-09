import { Request, Response } from 'express';
import { ReportModel } from '../models/ReportModel';
import { validateCreateReport, validateUpdateReport } from '../schemas/reportSchemas';

export class ReportController {
  private reportModel: ReportModel;

  constructor(reportModel: ReportModel) {
    this.reportModel = reportModel;
  }

  // Crear un nuevo reporte
  createReport = async (req: Request, res: Response): Promise<void> => {
    const validate = validateCreateReport(req.body);

    if (!validate.success) {
      res.status(400).json({ error: JSON.parse(validate.error.message) });
      return;
    }

    const user_id = parseInt(req.params.user_id, 10);

    try {
      const reportData = {
        ...validate.data,
        user_id,
        date_lost_or_found: new Date(validate.data.date_lost_or_found),
      };
      await ReportModel.createReport(reportData);
      res.status(201).json({ message: 'Reporte creado exitosamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  };

  // Obtener todos los reportes de un usuario
  getUserReports = async (req: Request, res: Response): Promise<void> => {
    const user_id = parseInt(req.params.user_id, 10);

    try {
      const reports = await ReportModel.getReportsByUserId(user_id);
      res.status(200).json(reports);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  };

  // Editar un reporte
  updateReport = async (req: Request, res: Response): Promise<void> => {
    const validate = validateUpdateReport(req.body);

    if (!validate.success) {
      res.status(400).json({ error: JSON.parse(validate.error.message) });
      return;
    }

    const report_id = parseInt(req.params.report_id, 10);

    try {
      const updateData = {
        ...validate.data,
        date_lost_or_found: validate.data.date_lost_or_found ? new Date(validate.data.date_lost_or_found) : undefined,
      };
      await ReportModel.updateReport(report_id, updateData);
      res.status(200).json({ message: 'Reporte actualizado exitosamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  };

  // Eliminar un reporte
  deleteReport = async (req: Request, res: Response): Promise<void> => {
    const report_id = parseInt(req.params.report_id, 10);

    try {
      await ReportModel.deleteReport(report_id);
      res.status(200).json({ message: 'Reporte eliminado exitosamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  };

  getReportModel = (): ReportModel => {
    return this.reportModel;
  };
}
