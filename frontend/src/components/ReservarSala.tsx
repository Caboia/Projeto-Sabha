import React, { useState } from 'react';

interface FormData {
  reservationId: string;
  roomName: string;
  roomImage: File | null; // Suportar arquivos
  roomLocation: string;
  dateOfUse: string;
  startTime: string;
  endTime: string;
  responsiblePerson: string;
  reasonForUse: string;
  additionalInfo: string;
  guests: string;
}

const ReservarSala: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const [formData, setFormData] = useState<FormData>({
    reservationId: '',
    roomName: '',
    roomImage: null,
    roomLocation: '',
    dateOfUse: '',
    startTime: '',
    endTime: '',
    responsiblePerson: '',
    reasonForUse: '',
    additionalInfo: '',
    guests: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (e.target instanceof HTMLInputElement && e.target.type === 'file') {
      // Se o input é um file input e possui arquivos selecionados
      const files = (e.target as HTMLInputElement).files;
      if (files && files.length > 0) {
        setFormData((prevState) => ({
          ...prevState,
          [name]: files[0] // Armazena o arquivo diretamente no estado
        }));
      }
    } else {
      // Para todos os outros inputs
      setFormData((prevState) => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Obtendo o IP salvo localmente
      const ip = localStorage.getItem('ip') || 'localhost';
      const response = await fetch(`http://${ip}:3000/sala/reservar`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      console.log(response)
      if (response.ok) {
        const result = await response.text(); // Trata a resposta como texto
        alert(result); // Exibe a resposta do servidor
      } else {
        alert('Falha ao reservar a sala. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao reservar sala:', error);
      alert('Erro ao reservar a sala. Tente novamente mais tarde.');
    }
  };

  return (
    <div className={`p-4 mt-5 rounded min-h-[95%] ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <h1 className={`text-3xl font-bold mb-6 ${darkMode ? 'text-white' : ''}`}>Reservar Sala</h1>

      <div className="grid grid-cols-2 gap-4 ">
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 '>
          <label htmlFor="roomName">Nome da Sala:</label>
          <input
            type="text"
            id="roomName"
            name="roomName"
            value={formData.roomName}
            onChange={handleChange}
            className={`w-full p-2 border rounded-md mt-1 ${darkMode ? 'bg-[#17203f] border-transparent' : ''}`}
          />

          <label htmlFor="roomImage">Foto Ilustrativa da Sala:</label>
          <input
            type="file"
            id="roomImage"
            name="roomImage"
            accept="image/*"
            onChange={handleChange}
            className={`w-full p-2 border rounded-md mt-1 ${darkMode ? 'bg-[#17203f] border-transparent' : ''}`}
          />

          <label htmlFor="roomLocation">Local da Sala:</label>
          <input
            type="text"
            id="roomLocation"
            name="roomLocation"
            value={formData.roomLocation}
            onChange={handleChange}
            className={`w-full p-2 border rounded-md mt-1 ${darkMode ? 'bg-[#17203f] border-transparent' : ''}`}
          />

          <label htmlFor="dateOfUse">Data de Uso:</label>
          <input
            type="date"
            id="dateOfUse"
            name="dateOfUse"
            value={formData.dateOfUse}
            onChange={handleChange}
            className={`w-full p-2 border rounded-md mt-1 ${darkMode ? 'bg-[#17203f] border-transparent' : ''}`}
          />

          <label htmlFor="startTime">Hora Início do uso:</label>
          <input
            type="time"
            id="startTime"
            name="startTime"
            value={formData.startTime}
            onChange={handleChange}
            className={`w-full p-2 border rounded-md mt-1 ${darkMode ? 'bg-[#17203f] border-transparent' : ''}`}
          />

          <label htmlFor="endTime">Hora Final do uso:</label>
          <input
            type="time"
            id="endTime"
            name="endTime"
            value={formData.endTime}
            onChange={handleChange}
            className={`w-full p-2 border rounded-md mt-1 ${darkMode ? 'bg-[#17203f] border-transparent' : ''}`}
          />
        </form>

        <form onSubmit={handleSubmit} className='flex flex-col gap-4 '>
          <label htmlFor="responsiblePerson">Responsável pelo uso:</label>
          <input
            type="text"
            id="responsiblePerson"
            name="responsiblePerson"
            value={formData.responsiblePerson}
            onChange={handleChange}
            className={`w-full p-2 border rounded-md mt-1 ${darkMode ? 'bg-[#17203f] border-transparent' : ''}`}
          />

          <label htmlFor="reasonForUse">Motivo do uso:</label>
          <textarea
            id="reasonForUse"
            name="reasonForUse"
            value={formData.reasonForUse}
            onChange={handleChange}
            className={`w-full p-2 border rounded-md mt-1 ${darkMode ? 'bg-[#17203f] border-transparent' : ''}`}
          ></textarea>

          <label htmlFor="additionalInfo">Informações em geral:</label>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            className={`w-full p-2 border rounded-md mt-1 ${darkMode ? 'bg-[#17203f] border-transparent' : ''}`}
          ></textarea>

          <label htmlFor="guests">Convidados:</label>
          <input
            type="text"
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            className={`w-full p-2 border rounded-md mt-1 ${darkMode ? 'bg-[#17203f] border-transparent' : ''}`}
          />

          <button type="submit" className={`mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ${darkMode ? 'bg-[#202744] hover:bg-[#17203f]' : ''}`}>
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReservarSala;