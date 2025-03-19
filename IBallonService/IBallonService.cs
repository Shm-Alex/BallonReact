using System;
using System.Collections.Generic;

namespace BallonServiceContract
{
    public class Balloon 
    {
        public int Id { get;  set; }
        public int R { get; set; }
        public int Collor { get; set; }
        public string? Name { get; set; }
        ///// <summary>
        ///// 1 атм = 101,325 Па.
        ///// </summary>
        //public decimal PressureAtm {
        //    get { return PressureAbs / 101.325M; }
        //    set { PressureAbs = value * 101.325M; } } 
        /// <summary>
        /// 1 атм = 101,325 Па.
        /// </summary>
        public decimal  PressureAbs { get; set; }
    }
    public interface IBallonService
    {
        Balloon Create(Balloon b);
        Balloon? Update(Balloon b);
        Balloon Get(int  id);
        List<Balloon> Get();
        bool Delete(int id);
    }
}
